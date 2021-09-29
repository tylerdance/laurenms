function Contact () {
    return (
        <div>
            <div id="contact-form">
                <form>
                    <div className="form-group">
                        <label for="input-email">Your email</label>
                        <input type="email" class="form-control" id="input-email" />
                    </div>
                    <div>
                        <label for="input-message">Messsge</label>
                        <textarea id="message-body" type="text" class="form-control"></textarea>
                    </div>
                    <br />
                    <button class="btn btn-light">Send</button>
                </form>

            </div>
    
        </div>
    )
}

export default Contact;