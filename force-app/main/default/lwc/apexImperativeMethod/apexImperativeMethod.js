import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import getContactListError from '@salesforce/apex/ContactController.getContactListError';
import getNoncacheableContactList from '@salesforce/apex/ContactController.getNoncacheableContactList';
import getNoncacheableContactListError from '@salesforce/apex/ContactController.getNoncacheableContactListError';

export default class ApexImperativeMethod extends LightningElement {
    @track contacts;
    @track error;

    handleLoad() {
        getContactList()
            .then(result => {
                this.contacts = result;
                try {
                    this.contacts[0].x = 'y';
                    console.error('[cacheable]XXX - mutated');
                } catch (e) {
                    console.error('[cacheable]XXX - did not mutate');
                }

                try {
                    this.contacts.push({ 'a': 'b ' });
                    console.error('[cacheable]YYY - mutated');
                } catch (e) {
                    console.error('[cacheable]YYY - did not mutate');
                }

                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                try {
                    this.error.body.message = 'foo';
                    console.error('[cacheable]error - mutated');
                } catch (e) {
                    console.error('[cacheable]error - did not mutate');
                }

                this.contacts = undefined;
            });

        getContactListError()
            .then(result => {
                this.contacts = result;
                try {
                    this.contacts[0].x = 'y';
                    console.error('[cacheable]XXX - mutated');
                } catch (e) {
                    console.error('[cacheable]XXX - did not mutate');
                }

                try {
                    this.contacts.push({ 'a': 'b ' });
                    console.error('[cacheable]YYY - mutated');
                } catch (e) {
                    console.error('[cacheable]YYY - did not mutate');
                }

                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                try {
                    this.error.body.message = 'foo';
                    console.error('[cacheable]error - mutated');
                } catch (e) {
                    console.error('[cacheable]error - did not mutate');
                }

                this.contacts = undefined;
            });
        
        getNoncacheableContactList()
            .then(result => {
                this.contacts = result;
                try {
                    this.contacts[0].x = 'y';
                    console.error('[noncacheable]XXX - mutated');
                } catch (e) {
                    console.error('[noncacheable]XXX - did not mutate');
                }

                try {
                    this.contacts.push({ 'a': 'b ' });
                    console.error('[noncacheable]YYY - mutated');
                } catch (e) {
                    console.error('[noncacheable]YYY - did not mutate');
                }

                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                try {
                    this.error.body.message = 'foo';
                    console.error('[noncacheable]error - mutated');
                } catch (e) {
                    console.error('[noncacheable]error - did not mutate');
                }

                this.contacts = undefined;
            });

        getNoncacheableContactListError()
            .then(result => {
                this.contacts = result;
                try {
                    this.contacts[0].x = 'y';
                    console.error('[noncacheable]XXX - mutated');
                } catch (e) {
                    console.error('[noncacheable]XXX - did not mutate');
                }

                try {
                    this.contacts.push({ 'a': 'b ' });
                    console.error('[noncacheable]YYY - mutated');
                } catch (e) {
                    console.error('[noncacheable]YYY - did not mutate');
                }

                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                try {
                    this.error.body.message = 'foo';
                    console.error('[noncacheable]error - mutated');
                } catch (e) {
                    console.error('[noncacheable]error - did not mutate');
                }

                this.contacts = undefined;
            });
    }
}
