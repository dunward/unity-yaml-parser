import * as fs from 'fs';
import * as yaml from 'yaml';

export class UnityYamlParser {
    splitData: string[] = [];

    constructor(path: string) {
        var data = fs.readFileSync(path, 'utf8');
        this.splitData = data.split('---');
    }

    getYamlDataList(): UnityYamlData[] {
        var result: UnityYamlData[] = [];
        this.splitData.forEach((item) => {
            var regex = /!u!(.*) &(.*)( stripped)?/;
            var matching = item.match(regex);
            if (matching != null) {
                var classId = matching[1];
                var fileId = matching[2];
                var unityClass: UnityClass = yaml.parse(item.replace(matching[0], ""));
                result.push(new UnityYamlData(classId, fileId, unityClass));
            }
        });
        return result;
    }
}

class UnityYamlData {
    classId: string;
    fileId: string;
    data: UnityClass;

    constructor(classId: string, fileId: string, data: UnityClass) {
        this.classId = classId;
        this.fileId = fileId;
        this.data = data;
    }
}