const primeUser = require('../Models/primeBatch');
async function handleGetAllprimeUsers(req, res) {
    const x= await primeUser.find({});
    res.json(x);

}
async function handleCreateprimeUser(req, res) {
    const prime = req.body;
    const newprimeUser = await new primeUser(prime);
    await newprimeUser.save();
    res.json(newprimeUser);
    
}
function handleUpdateprimeUser(req, res) {
    const x = req.params.Registernumber;
    const updatedData = req.body;   

    primeUser.findOneAndUpdate({ Registernumber: x }, updatedData, { new: true })
        .then((updatedprimeUser) => {
            if (!updatedprimeUser) {
                return res.status(404).json({ error: 'primeUser not found' });
            }
            res.json(updatedprimeUser);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error updating primeUser' });
        });
}
async function handleDeleteprimeUser(req, res) {
    const { Registernumber } = req.params;
   await primeUser.findOneAndDelete({ registerNumber: Registernumber })
        .then(() => {
            res.status(200).json({ message: 'primeUser deleted successfully' });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error deleting primeUser' });
        });
    // res.json({ message: 'primeUser deleted successfully' });
    // res.status(200).json({ message: 'primeUser deleted successfully' });
    // res.status(500).json({ error: 'Error deleting primeUser' });
    //
    
}
async function handleGetbyYearandSection(req, res) {
    const { year, section,depart} = req.params;
    const primeUsers = await primeUser.find({ Year: year, Section: section,department:depart});
    res.json(primeUsers);
}

module.exports = {
    handleGetAllprimeUsers,
    handleCreateprimeUser,
    handleUpdateprimeUser,
    handleDeleteprimeUser,
    handleGetbyYearandSection
};