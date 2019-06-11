import React, {Component} from 'react';
import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';
import Input from 'arui-feather/input';
import Button from 'arui-feather/button';
import Plate from 'arui-feather/plate';
import Textarea from 'arui-feather/textarea';
import RadioGroup from 'arui-feather/radio-group';
import Radio from 'arui-feather/radio';
import CheckBox from 'arui-feather/checkbox';

import './customer.css';

class Customer extends Component {
    state = {
        customer: '',
        site: '',
        message: ''
    };

    handlerMakeMessage = () => {
        this.setState({message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`})
    }

    onSubmitMessage = () => {
        alert('Данные по клиенту сохранены!');
    };

    render() {
        
        let {message} = this.state;
        const radioHeader = ['Один', 'Два', 'Три', 'Четыре'];
        const maxItemHeader = 3;
        const checkItems = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7'
        ];
        return (
            <div className='customer'>
                <Form onSubmit={this.onSubmitMessage}>
                    <FormField>
                        <Input className='input width40' label='Клиент' placeholder='Введите клиента'/>
                        <Input className='input width60' label='Сайт' placeholder='Введите сайт'/>
                    </FormField>
                    <FormField>
                        <Plate className='plate'>
                            <h3>Header</h3>

                            <RadioGroup>
                                {radioHeader.map(text => (<Radio className='radio' text={text} key={text} value={text}/>))}
                            </RadioGroup>
                            <h4>{`Выбери ${maxItemHeader} элемента для вставки`}</h4>
                            <div className='displayFlex'>
                                {checkItems.map(text => (

                                    <div className='checkBox'>
                                        <CheckBox text={text}/>
                                    </div>

                                ))}</div>
                        </Plate>
                    </FormField>
                    <FormField>
                        <Button onClick={this.handlerMakeMessage} view='extra' type='button'>Сформировать сообщение</Button>
                    </FormField>
                    <FormField>
                        <Textarea
                            className='textarea'
                            label='Сообщение для клиента'
                            disabled={true}
                            value={message}/>
                    </FormField>
                    <FormField>
                        <div className='checkBox'>
                            <CheckBox text='Отклонить'/>
                        </div>
                    </FormField>
                    <FormField>
                        <Button view='extra' type='submit'>Отправить</Button>
                    </FormField>
                </Form>
            </div>
        );
    }
}

export default Customer;