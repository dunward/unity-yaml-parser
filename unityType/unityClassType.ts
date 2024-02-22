type UnityClass = {
    GameObject: GameObject;
} & {
    MonoBehaviour: MonoBehaviour;
}

type TagData = {
    classId: string;
    fileId: string;
}

interface GameObject {
    m_Enabled: number;
    m_Name: string;
}

interface MonoBehaviour {
    m_Enabled: number;
}