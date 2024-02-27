import { UnityYamlParser } from "../main";

const filePath: string = 'test/Demo.unity';
var parser = new UnityYamlParser(filePath);
parser.getYamlDataList().forEach((item) => {
    switch (item.classId) {
        case "1":
            // console.log(`GameObject ${item.data.GameObject.m_Name}`);
            break;
        case "4":
            console.log(`Transform ${item.data.Transform.m_Father.fileID}`);
            break;
        case "114":
            // console.log(`MonoBehaviour ${item.data.MonoBehaviour.m_Enabled}`);
            break;
        case "224":
            console.log(`RectTransform ${item.data.RectTransform?.m_Father?.fileID ?? -1}`);
            break;
    }
});