const User = require('../Models/userdetails');
async function handleGetAllUsers(req, res) {
    const x= await User.find({});
    res.json(x);

}
async function handleCreateUser(req, res) {
    const user = req.body;
    const newUser = await new User(user);
    await newUser.save();
    res.json(newUser);
    
}
function handleUpdateUser(req, res) {
    const x = req.params.Registernumber;
    const updatedData = req.body;   

    User.findOneAndUpdate({ Registernumber: x }, updatedData, { new: true })
        .then((updatedUser) => {
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(updatedUser);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error updating user' });
        });
}
async function handleDeleteUser(req, res) {
    const { Registernumber } = req.params;
   await User.findOneAndDelete({ Registernumber: Registernumber })
        .then(() => {
            res.status(200).json({ message: 'User deleted successfully' });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error deleting user' });
        });
    // res.json({ message: 'User deleted successfully' });
    // res.status(200).json({ message: 'User deleted successfully' });
    // res.status(500).json({ error: 'Error deleting user' });
    //
    
}
async function handleGetbyYearandSection(req, res) {
    const { year, section } = req.params;
    const users = await User.find({ Year: year, Section: section });
    res.json(users);
}

module.exports = {
    handleGetAllUsers,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
    handleGetbyYearandSection
};