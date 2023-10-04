import React from 'react'

interface MainPageProps {
    allManagers: any[],
    allCourts: any[],
    allProcedures: any[],
}

export default function MainPage({ allManagers, allCourts, allProcedures }: MainPageProps) {
    return (
        <div className='mainPageContainer'>

            <div className="mainPageRow special">
                <div className="rowItem">
                    NAME
                </div>

                <div className="rowItem">
                    COUNT
                </div>
            </div>

            <div className="mainPageRow">
                <div className="rowItem">
                    MANAGERS :
                </div>

                <div className="rowItem">
                    {allManagers?.length > 0 ? allManagers.length : null}
                </div>
            </div>

            <div className="mainPageRow">
                <div className="rowItem">
                    COURTS :
                </div>

                <div className="rowItem">
                    {allCourts?.length > 0 ? allCourts.length : null}
                </div>
            </div>

            {allCourts?.length > 0 && allCourts.map((item: any) => {
                return (
                    <div className="mainPageRow">
                        <div className="rowItem">
                            COURTS NAME : {item.attributes.name}
                        </div>

                        <div className="rowItem">
                            {allProcedures?.filter((temp: any) => temp.attributes.courtID == item.id).length}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
