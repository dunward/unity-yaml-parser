import * as fs from 'fs';
import * as yaml from 'yaml';
import * as UnityClassType from './unityType/unityClassType';


export function parse(path: string): Map<string, UnityYamlData> {
    var data = fs.readFileSync(path, 'utf8');
    const splitData = data.split('---');
    var result: Map<string, UnityYamlData> = new Map<string, UnityYamlData>();
    splitData.forEach((item) => {
        const regex = /!u!(\d+) &(\d+)( stripped)?/;

        const multilineRegex = /'(.|\n)*?'/gm;
        const matches = item.match(multilineRegex);

        let modifiedYamlString = item;
        if (matches) {
            matches.forEach(match => {
                const modifiedMatch = match.replace(/\n/g, '\\n');
                modifiedYamlString = modifiedYamlString.replace(match, modifiedMatch);
            });
        }
        
        var matching = modifiedYamlString.match(regex);
        if (matching != null) {
            var classId = matching[1];
            var fileId = matching[2];
            var unityClass: UnityClassType.UnityClass = yaml.parse(modifiedYamlString.replace(matching[0], ""), { intAsBigInt: true });
            result.set(fileId, new UnityYamlData(classId, fileId, unityClass, matching[3] != undefined));
        }
    });
    return result;
}

export class UnityYamlData {
    classId: string;
    fileId: string;
    data: UnityClassType.UnityClass;
    stripped: boolean;

    constructor(classId: string, fileId: string, data: UnityClassType.UnityClass, stripped: boolean) {
        this.classId = classId;
        this.fileId = fileId;
        this.data = data;
        this.stripped = stripped;
    }
}