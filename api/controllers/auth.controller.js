export const signup = (req, res) => {
//   // Logic for user sign-up
//   const { username, password } = req.body;
  
//   // Here you would typically hash the password and save the user to the database
//   // For simplicity, we are just sending a success message
//   res.status(201).json({
//     message: 'User signed up successfully',
//     user: {
//       username,
//       // Password should not be sent in response in a real application
//     }
//   });

console.log('User signed up:', req.body);
}
