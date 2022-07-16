import React from "react";

const Login = ({ onSubmit }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    };
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({
            email: email,
            password: password
        });
    };

    return (
        <main>
            <section className="login">
                <div className="login__container">
                    <h2 className="login__title">Вход</h2>
                    <form className="login__form" onSubmit={handleSubmit}>
                        <input className="login__input" type="email" name="email" placeholder="Email" maxLength="100" onChange={handleEmailChange} />
                        <input className="login__input" type="current-password" name="current-password" placeholder="Пароль" maxLength="50" onChange={handlePasswordChange} />
                        <button className="login__button" type="submit" onSubmit={handleSubmit}>Войти</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Login;