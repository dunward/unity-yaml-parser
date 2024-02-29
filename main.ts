import * as fs from 'fs';
import * as yaml from 'yaml';
import * as UnityClassType from './unityType/unityClassType';


export function parse(path: string): UnityYamlData[] {
    var data = fs.readFileSync(path, 'utf8');
    const splitData = data.split('---');
    var result: UnityYamlData[] = [];
    splitData.forEach((item) => {
        var regex = /!u!(\d+) &(\d+)( stripped)?/;
        var matching = item.match(regex);
        if (matching != null) {
            var classId = matching[1];
            var fileId = matching[2];
            var unityClass: UnityClassType.UnityClass = yaml.parse(item.replace(matching[0], ""));
            result.push(new UnityYamlData(classId, fileId, unityClass, matching[3] != undefined));
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