export type UnityClass = {
    GameObject: GameObject;
} & {
    MonoBehaviour: MonoBehaviour;
} & {
    Transform: Transform;
} & {
    RectTransform: RectTransform;
}

export type TagData = {
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

interface Transform {
    m_LocalPosition: Vector3;
    m_LocalRotation: Quaternion;
    m_LocalScale: Vector3;
}

interface RectTransform extends Transform {
    
}

interface Vector3 {
    x: number;
    y: number;
    z: number;
}

interface Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
}