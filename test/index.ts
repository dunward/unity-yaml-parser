import { UnityYamlParser } from "../main";

const filePath: string = 'test/Demo.unity';
var parser = new UnityYamlParser(filePath);
parser.getYamlDataList().forEach((item) => {
    console.log(item.classId);
    console.log(item.fileId);
    console.log(item.data);
});