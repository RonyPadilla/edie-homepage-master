import '../style/task.css'

export const Task = () => {
    return(<>
    <section className='task'>
        <div className='div-h1-task'>
            <h1 className='h1-task'>“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”    </h1>
        </div>
        <div className='div-task'>
            <div className='div-img-task'>
                <img 
                className='img-task'
                src="https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/person4.png?raw=true" alt="person-4" />
            </div>
            <div className='div-info-task'>
                <h2 className='div-h2-info-task'>Carlos Tran</h2>
                <p className='div-p-info-task'>The Decorate Gatsby</p>
            </div>
        </div>
    </section>
    </>)
}
