export default function Signup() {
  return (
    <div>
      <form>
        <label>Full Name</label>
        <input placeholder="Enter your full name" type="text" />
        <label>User Name</label>
        <input placeholder="Enter your username" type="text" />
        <label>Password</label>
        <input placeholder="Enter password" type="password" />
        <label>Confirm Password</label>
        <input placeholder="confirm username" type="password" />
        <button>Signup</button>
      </form>
    </div>
  );
}
