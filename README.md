## Project Commands

1. Install all dependencies

    `yarn install`

2. Run local web server:

    `yarn dev`

3. Create a build so that build assets are not virtual.

    `yarn build`

## Test Cases Commands

1. Run test for all the components / whole project.

    `yarn test`

2. Run test for single component:

    `yarn test {test_file_name}`

## Setup for Linux

1.  NodeJS

    ```
    $ sudo apt install nodejs
    ```

2.  Install NPM:

    ```
    $ sudo apt install npm
    ```

3.  Install Yarn

    ```
    $ npm install --global yarn
    ```

4.  Clone the Repo and change to that directory:

    ```
    $ git clone https://github.com/adityajain-Infobeans/vue-cli-3-unit-test-POC
    ```

5.  Install all dependencies:

    ```
    $ yarn install
    ```

## References

1.  [Vue test utils](https://vue-test-utils.vuejs.org/ 'Vue test utils')

2.  [Jest](https://jestjs.io/docs/getting-started 'Jest')

3.  [Sinon](https://sinonjs.org/#get-started 'Sinon')

4.  [Mock Axios](https://github.com/ctimmerm/axios-mock-adapter 'Mock Axios')

#### Coverage Report Generation

-   Access the coverage report in `.coverage` directory, after running `yarn test`
