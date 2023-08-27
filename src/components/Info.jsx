import '../style/info.css'

export const Info = () => {
    return(<>
    <section className="info">
        <div className='div-first-text-info'>
            <h3 className='h3-div-first-text'>Unhappy with your website?</h3>
            <h1 className='h1-div-first-text'>We create beautiful<br/> and fast web services</h1>
        </div>
        <img className='people-group' src="https://github.com/RonyPadilla/edie-homepage-master/blob/main/src/img/heroImage.jpg?raw=true" alt="people-group" />

        <div className='div-second-text-info'>
            <h1 className='h1-div-second-text'>Story, emotion <br/>and purpose</h1>
            <p className='p-div-second-text'>We help transform your ideas into real <br/>world applications that will outperform <br/>your toughest competition and help you <br/>achieve your strategic goals in short<br/> period of time.</p>
            <div className='div-button-info'>
                <label className='label-div-second-text'>Want us to contact you?</label>
                <div className='input-button-div-second-text'>
                    <input className='input-div-second-text' type="text" placeholder="Email"/>
                    <button className='button-div-second-text'>Join</button>
                </div>
            </div>
        </div>
    </section>
    </>)
}
