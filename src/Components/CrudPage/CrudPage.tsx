import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchData } from '../../slices/AsyncMethods/fetchData';
import MyForm from '../MyForm/MyForm';

interface CrudPageProps {
    nameCRUD: string,
    nameSTATE: string,
    needSelect?: {
        courts: any,
        managers: any,
    },
}

export default function CrudPage({ nameCRUD, nameSTATE, needSelect }: CrudPageProps) {

    let test: any;

    let [editValue, setEditValue] = useState(test)


    let mySelector = useSelector((state: any) => state[nameSTATE])
    let dispatch = useDispatch();

    let pohui: any = [];

    let [myArr, setMyArr] = useState(pohui);

    useEffect(() => {
        if (mySelector.value) {
            setMyArr(mySelector)
        }
    }, [mySelector])



    // functions
    function createItemsList(basicArr: any) {
        if (!basicArr?.value?.length) {
            return false
        }

        let topicArr = Object.keys(basicArr.value[0].attributes);
        basicArr = basicArr.value


        let myArr = [];

        let myTopicArr = [];

        for (let i = 0; i < topicArr.length; i++) {
            myTopicArr.push(
                <>
                    <div key={i} className="listValue">{topicArr[i]}</div>
                    {i === topicArr.length - 1 && <div key={i + 1} className="listValue">actions</div>}
                </>
            )
        }


        myArr.push(
            <div className="listItem special">
                {myTopicArr}
            </div>
        )

        for (let i = 0; i < basicArr.length; i++) {
            myArr.push(
                <div key={i} className="listItem">
                    {Object.values(basicArr[i].attributes).map((value: any, valueIndex, valueArr) => {
                        if (valueIndex === valueArr.length - 1) {
                            return (
                                <>
                                    <div key={valueIndex} className="listValue">{value}</div>
                                    <div className='btnContainer'>


                                        <button onClick={() => {
                                            setEditValue(basicArr[i])
                                        }}>Edit</button>


                                        <button onClick={() => dispatch(fetchData({
                                            method: 'DELETE',
                                            path: `${nameCRUD}/${basicArr[i].id}`
                                        }))}>Delete</button>
                                    </div>
                                </>
                            )
                        }
                        return (
                            <div key={valueIndex} className="listValue">{value}</div>
                        )


                    })}
                </div>
            )
        }

        return myArr
    }

    return (
        <>
            <div className="titleContainer">
                {nameCRUD}
            </div>

            <div className="formContainer">
                <MyForm inputsKeys={myArr}
                    submitMethod='POST'
                    formPath={nameCRUD}
                    needSelect={needSelect} />

                <MyForm inputsKeys={myArr}
                    submitMethod='PUT'
                    editValue={editValue}
                    formPath={nameCRUD}
                    needSelect={needSelect} />

            </div>



            <div className="itemsContainer">
                {createItemsList(myArr)}
            </div>
        </>
    )
}
