import { Form } from "react-router-dom"
import { IUser } from "./UserList"
interface Props {
  data?: IUser
}
export const UserForm = (props: Props) => {
  const { data } = props
  return (
    <>
      <Form method="post" id="contact-form">
        <label>
          <span>Name</span>
          <input
            placeholder="Name"
            aria-label="Name"
            type="text"
            name="username"
            defaultValue={data?.username}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            placeholder="Email"
            aria-label="email"
            type="text"
            name="email"
            defaultValue={data?.email}
          />
        </label>
        <label>
          <span>Phone number</span>
          <input
            placeholder="Phone number"
            aria-label="phoneNumber"
            type="text"
            name="phoneNumber"
            defaultValue={data?.phoneNumber}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="text"
            name="password"
            placeholder="Password"
            defaultValue={data?.password}
          />
        </label>
        <label>
          <span>Age</span>
          <input
            type="number"
            name="age"
            placeholder="Age"
            defaultValue={data?.password}
          />
        </label>
        <p>
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </p>
      </Form>
    </>
  )
}
