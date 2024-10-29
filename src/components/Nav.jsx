// rrd imports
import { Form, NavLink } from 'react-router-dom';
//assets
import logo from '../assets/logomark.svg';
import {TrashIcon} from '@heroicons/react/24/solid';


const Nav = ({userName}) => {
  return (
    <nav>
      < NavLink to={"/"}>
      <img src={logo} alt="" />
      <span>HomeBudget</span>
      </ NavLink>
      { userName && (
        <Form
          method="post"
          action='/logout'
          onSubmit={(event) =>{
            if (!confirm("Delete?")){
              event.preventDefault();
            }
          }}
        >
          <button className="btn btn--warning" type='submit'>
            <span>Delete User</span>
            <TrashIcon width={20} />  {/* heroicons */}
          </button>

        </Form>
      )}
    </nav>
  )
}

export default Nav
