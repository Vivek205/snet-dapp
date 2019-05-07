import Fortmatic from 'fortmatic';
import Web3 from 'web3';

const API_KEY = 'pk_test_2DDB9F91B7018B59';

const fm = new Fortmatic(API_KEY,'kovan');

const initializeFortmatic = () => {
    window.web3 = new Web3(fm.getProvider());
    // fm.user.logout();
}

export {
    initializeFortmatic,
    fm
}