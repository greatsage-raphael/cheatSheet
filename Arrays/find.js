// find arrray method: best used to find a unique id from an array
const numbers3 = [1,3,4,5,6,7,8,9,0]
const found = numbers3.find(n => n === 7);
console.log(found)


//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

