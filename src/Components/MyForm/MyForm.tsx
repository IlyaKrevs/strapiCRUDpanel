import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../slices/AsyncMethods/fetchData'

interface IFormType {
    submitMethod: 'POST' | 'PUT',
    formPath: string,
    inputsKeys: any,
    editValue?: any,
    needSelect?: {
        courts: any,
        managers: any,
    }
}

export default function MyForm({ inputsKeys, submitMethod, editValue, formPath, needSelect }: IFormType) {

    useEffect(() => {
        setEditValue(editValue)
    }, [editValue])


    let dispatch = useDispatch()

    const { register, handleSubmit, reset, setValue } = useForm<any>()

    function setEditValue(value: any) {
        if (!value) {
            return
        }
        let entires = Object.entries(value.attributes)
        for (let i = 0; i < entires.length; i++) {

            if (entires[i][0].includes('At')) {
                return
            }

            setValue(entires[i][0], entires[i][1])
        }
    }

    function createInputs(arr: any) {

        if (!arr.value?.length) {
            return false
        }

        arr = Object.keys(arr.value[0].attributes)

        return arr.map((item: any, index: number) => {
            if (item.includes('At')) {
                return
            }


            if (item.includes('ID')) {

                let current = item.includes('court') ? needSelect?.courts : needSelect?.managers
                if (current) {
                    return (
                        <select {...register(item)}>
                            {current.map((item: any) => {
                                return (
                                    <option
                                        value={item.id}>
                                        {item.attributes?.name ? item.attributes.name : item.attributes.firstName + ' ' + item.attributes.lastName}
                                    </option>
                                )
                            })}
                        </select>
                    )
                }
            }


            return (
                <input
                    key={index}
                    type="text"
                    placeholder={item}
                    {...register(item)}
                />
            )
        })
    }


    const mySUBMIT: SubmitHandler<any> = (formValue) => {
        let currentPath = formPath

        if (editValue?.id) {
            currentPath += `/${editValue.id}`
        }

        dispatch(fetchData({
            method: submitMethod,
            path: currentPath,
            body: { data: formValue }
        }))
        reset()
    }

    return (
        <div className="createForm">
            <div className="formTitle">
                {submitMethod === 'POST' ? 'CREATE' : 'UPDATE'}
            </div>
            <form onSubmit={handleSubmit(mySUBMIT)} className='inputContainer'>

                {createInputs(inputsKeys)}

                <button type="submit">  {submitMethod === 'POST' ? 'CREATE' : 'UPDATE'}</button>
            </form>
        </div>
    )
}
