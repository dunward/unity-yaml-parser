import { UnityYamlParser } from "../main";

const filePath: string = 'test/Demo.unity';
var parser = new UnityYamlParser(filePath);
parser.getYamlDataList().forEach((item) => {
    switch (item.classId) {
        case "1":
            console.log(`GameObject ${item.data.GameObject.m_Name}`);
            break;
        case "4":
            console.log(`Transform ${JSON.stringify(item.data.Transform.m_LocalPosition)}`);
            break;
        case "114":
            console.log(`MonoBehaviour ${item.data.MonoBehaviour.m_Enabled}`);
            break;
        case "224":
            console.log(`RectTransform ${JSON.stringify(item.data.RectTransform.m_LocalPosition)}`);
            break;
    }
});