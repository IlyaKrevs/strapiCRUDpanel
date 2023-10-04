export function createFirstValue() {

    fetch(`http://localhost:1337/api/courts`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'bearer 4189c36fbfc30faea01612517362ad793c83b3fbf022070e407d1e51305b16b03fecb97e2c7b6a2b02380dc88e79d506a0ed600f21b4b5df579ace8f6434039c11bd58e3ed7660e0da405adbfc3a598cad62a85ec50e67b1a6140482a0d543f0c2b6f0e876a81ad51054a66124c3b63e28209c827ebf1d6870533e222d9179c5'
        },
        body: JSON.stringify({
            data: {
                name: 'name',
                address: 'address',
                index: 'index',
                website: 'website',
                phone: '123',
                email: 'email@email.ru',
            }
        }),
    })


    fetch(`http://localhost:1337/api/arbitration-managers`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'bearer 4189c36fbfc30faea01612517362ad793c83b3fbf022070e407d1e51305b16b03fecb97e2c7b6a2b02380dc88e79d506a0ed600f21b4b5df579ace8f6434039c11bd58e3ed7660e0da405adbfc3a598cad62a85ec50e67b1a6140482a0d543f0c2b6f0e876a81ad51054a66124c3b63e28209c827ebf1d6870533e222d9179c5'
        },
        body: JSON.stringify({
            data: {
                firstName: 'firstName',
                lastName: 'lastName',
                registryNumber: '12345',
            }
        }),
    })

    fetch(`http://localhost:1337/api/procedures`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'bearer 4189c36fbfc30faea01612517362ad793c83b3fbf022070e407d1e51305b16b03fecb97e2c7b6a2b02380dc88e79d506a0ed600f21b4b5df579ace8f6434039c11bd58e3ed7660e0da405adbfc3a598cad62a85ec50e67b1a6140482a0d543f0c2b6f0e876a81ad51054a66124c3b63e28209c827ebf1d6870533e222d9179c5'
        },
        body: JSON.stringify({
            data: {
                debtor: 'debtor',
                caseNumber: '12345',
                courtID: '1',
                arbitrationManagerID: '1'
            }
        }),
    })

}