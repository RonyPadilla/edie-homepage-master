import '../style/task.css'

export const Task = () => {
    return(<>
    <section className='task'>
        <div className='div-h1-task'>
            <h1 className='h1-task'>“Fast and outstanding resutls. Edie understands <br />their customer’s needs. They have a young and <br />talented team.”    </h1>
        </div>
        <div className='div-task'>
            <div className='div-img-task'>
                <img 
                className='img-task'
                src="https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/person4.png?raw=true" alt="person-4" />
            </div>
            <div className='div-info-task'>
                <h3 className='div-h3-info-task'>Carlos Tran</h3>
                <p className='div-p-info-task'>The Decorate Gatsby</p>
            </div>
        </div>
    </section>
    </>)
}
