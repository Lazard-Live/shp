function App() {

    return (
        <>
            <header className={'section header'}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className={'title'}>Выбери что нужно</h1>
                        </div>
                    </div>
                </div>

            </header>

            <section className={'section root__content'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-sm-12 col-md-6'}>
                            <div className={'card'}>
                                <div className={'card__img'}>
                                    <div className="card__title">Домашние ресурсы</div>
                                </div>

                                <div className="card__text">
                                    <div className={'card__link'}>
                                        1.<a href={'https://78.36.1.133:443/'}>
                                        Proxmax VM</a>
                                    </div>
                                    <div className={'card__link'}>
                                        2.<a href={'http://78.36.1.133:8080/'}>
                                        Torrent WEB
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'col-md-6 col-lg-6'}>
                            <div className={'card'}>
                                <div className={'card__img'}>
                                    <div className="card__title">
                                        Личные игровые серверы для relax'а
                                    </div>
                                </div>

                                <div className="card__text">
                                    <div>Minecraft: 78.36.1.133:3003
                                        <div>Версия игры: Forge 1.20.1</div>
                                        <div> Вход по белому листу</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={'footer'}>
                <div className="container-fluid">
                    <a className={'footer__link'} href={'https://discord.gg/D7rskdhQ'}>Discord</a>
                    <a className={'footer__link'} href={'https://t.me/workbd'}>Telegram</a>
                </div>
            </footer>
        </>
    )
}

export default App
