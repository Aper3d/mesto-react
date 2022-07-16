import React from "react";
import { Link } from 'react-router-dom';

const Register = ({ onSubmit }) => {

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
            <section className="register">
                <div className="login__container">
                    <h2 className="login__title">Регистрация</h2>
                    <form className="login__form" onSubmit={handleSubmit}>
                        <input className="login__input" type="email" name="email" placeholder="Email" maxLength="100" onChange={handleEmailChange} />
                        <input className="login__input" type="new-password" name="new-password" placeholder="Пароль" maxLength="50" onChange={handlePasswordChange} />
                        <button className="login__button" type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>
                    </form>
                    <div className="register__reroute">
                        <p>Уже зарегистрированы? <Link to="/" className="register__link">Войти</Link></p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Register;