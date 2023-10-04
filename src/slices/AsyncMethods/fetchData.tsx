import { createAsyncThunk } from "@reduxjs/toolkit"

export interface IFetchObj {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    body?: any,
}

export const fetchData: any = createAsyncThunk(
    'fetchData',
    async function (obj: IFetchObj) {
        const response = await fetch(`http://localhost:1337/api/${obj.path}`, {
            method: obj.method,
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'bearer 4189c36fbfc30faea01612517362ad793c83b3fbf022070e407d1e51305b16b03fecb97e2c7b6a2b02380dc88e79d506a0ed600f21b4b5df579ace8f6434039c11bd58e3ed7660e0da405adbfc3a598cad62a85ec50e67b1a6140482a0d543f0c2b6f0e876a81ad51054a66124c3b63e28209c827ebf1d6870533e222d9179c5'
            },
            body: JSON.stringify(obj.body),
        })

        const data = await response.json()
        return data

    }
)