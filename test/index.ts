import * as UnityYamlParser from "../main";

const filePath: string = 'test/Demo.unity';
UnityYamlParser.parse(filePath).forEach((item) => {
    switch (item.classId) {
        case "1":
            // console.log(`GameObject ${JSON.stringify(item.data.GameObject.m_Component)}`);
            break;
        case "4":
            console.log(`Transform ${item.data.Transform.m_GameObject.fileID}`);
            break;
        case "114":
            // console.log(`MonoBehaviour ${item.data.MonoBehaviour.m_Enabled}`);
            break;
        case "224":
            console.log(`RectTransform ${item.data.RectTransform.m_GameObject?.fileID ?? -1}`);
            break;
    }
});