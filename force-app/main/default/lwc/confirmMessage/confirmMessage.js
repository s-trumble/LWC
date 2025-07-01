import LightningModal from 'lightning/modal';

export default class ConfirmMessage extends LightningModal {
    handleCancel() {
        this.close('cancel');
    }

    handleConfirm() {
        this.close('confirm');
    }
}