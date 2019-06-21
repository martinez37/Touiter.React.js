import React from 'react';

class SendMessageForm extends React.Component {
    render() {
        return (
            <div className="SendMessageForm">
                <form action="" method="get" class="form-example">
                    <div class="form-example">
                        <label for="name">Votre nom </label>
                        <input type="text" name="name" id="name" required /></div>
                    <div class="form-example">
                        <label for="email">Votre message</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div class="form-example">
                        <input type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
        );
    }
};

export default SendMessageForm;