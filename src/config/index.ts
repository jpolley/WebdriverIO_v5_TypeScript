const shared = {
    // Default user logged in for most tests
    alternateEmail: 'josh@example.com',
    email: 'tom@example.com',
    username: 'tomsmith',
};

const production = {
    accessToken: 'a82f0e9a-1689-49ab-8456-161a44ca2365',
    domain: 'app.example.com',
    password: 'SuperSecretPassword!',
    userId: '123',
};

const staging = {
    accessToken: 'f95da72f-e8fd-492b-ac6d-0efb3eba428b',
    domain: 'staging.example.com',
    password: 'Pa$$w0rd',
    userId: '456',
};

const generateConfig = () => {
    const environment = process.env.TEST_ENV === 'staging' ? staging : production;
    return {...shared, ...environment};
};

export const config = generateConfig();
