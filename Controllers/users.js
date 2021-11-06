const User = require('../Models/users');

exports.userSignUp = (req, res) => {
    const { email, firstName, lastName ,password} = req.body;

    const user = new User({
        email: email,
		firstName: firstName,
		lastName: lastName,
		password: password,
    });

    User.find({ email: email }).then(
        result => {
            if (result) {
                res.status(200).json({ message: " User Already Registered", user: result })
            }
            else {
                user.save()
                    .then(response => {
                        res.status(200).json({ message: " User Registered Sucessfully", user: response })
                    })
                    .catch(err => {
                        res.status(500).json({ error: err })
                    })
            }
        }
    ).catch(err => {
        res.status(500).json({ error: err })
    })
}


// to check the authenticity of the user 
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.find({ email: email, password: password })
        .then(result => {
            if (result.length >= 1) {
                res.status(200).json({ message: "User LoggedIn Sucessfully", isAuthenticated: true, user: result })
            }
            else {
                res.status(200).json({ message: "User Not LoggedIn Sucessfully", isAuthenticated: false, user: result })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
}
