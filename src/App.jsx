function App() {

    return (
        <>
            <div className={'container'}>
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Добро пожаловать на тестовую распределительную стараницу</h1>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-12 col-md-6'}>
                        <div className={'card'}>
                            <div className="card__title">Полезные ссылки</div>
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
                            <div className="card__title">
                                Игровые серверы
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
                <div className={'row'}>
                    <div className={'col'}>
                        <a href={'https://discord.gg/D7rskdhQ'}>Сообщество Discord</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default App
