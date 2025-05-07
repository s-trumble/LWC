enterPassword();

function enterPassword(error = ``) {
    let userPassword = prompt(`${error} Enter password: `);

    if (userPassword.length <= 8) {
        console.log(`Password too short.`);
        enterPassword(`Password too short. `);
    } else if (!/[A-Z]/.test(userPassword)) {
        console.log(`Password must contain at least one uppercase letter.`);
        enterPassword(`Password must contain at least one uppercase letter. `);
    } else if (!/[a-z]/.test(userPassword)) {
        console.log(`Password must contain at least one lowercase letter.`);
        enterPassword(`Password must contain at least one lowercase letter. `);
    } else if (!/[0-9]/.test(userPassword)) {
        console.log(`Password must contain at least one number.`);
        enterPassword(`Password must contain at least one number. `);
    } else if (!/[!@#$%^&*]/.test(userPassword)) {
        console.log(`Password must contain at least one special character.`);
        enterPassword(`Password must contain at least one special character. `);
    } else {
        evaulatePassword(userPassword);
    }
}

function evaulatePassword(password) {
    let passwordStrength = ``;
    if (password.length < 10) {
        passwordStrength = `weak`;
    } else if (password.length < 14) {
        passwordStrength = `good`;
    } else if (password.length < 18) {
        passwordStrength = `strong`;
    } else {
        passwordStrength = `very strong`;
    }
    console.log(`Password strength: ${passwordStrength}`);
}