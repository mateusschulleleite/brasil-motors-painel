import Label from '../Label/Label';
import Input from '../Input/Input'
import './AddEditCar.scss';

export default function AddEditCar() {
  return (
    <div className='addeditcar'>
      <form>
        <fieldset>
          <Label id='nome' text='Nome' />
          <Input id='nome' placeholder='Insira o nome do carro' required='true'/>
        </fieldset>
        <fieldset>
          <Label id='nome' text='Nome' />
          <Input id='nome' placeholder='Insira o nome do carro' required='true'/>
        </fieldset>
        <fieldset>
          <Label id='nome' text='Nome' />
          <Input id='nome' placeholder='Insira o nome do carro' required='true'/>
        </fieldset>
        <fieldset>
          <Label id='nome' text='Nome' />
          <Input id='nome' placeholder='Insira o nome do carro' required='true'/>
        </fieldset>
        <fieldset>
          <Label id='nome' text='Nome' />
          <Input id='nome' placeholder='Insira o nome do carro' required='true'/>
        </fieldset>
        <fieldset>
          <Label id='nome' text='Nome' />
          <Input id='nome' placeholder='Insira o nome do carro' required='true'/>
        </fieldset>
      </form>

    </div>
  )
}
