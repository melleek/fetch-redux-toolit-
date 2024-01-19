import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, deleteUser, compUser, addUser, editUser } from './api/todos/todosApi'


//dialog
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {

  const dispatch = useDispatch()
  const infoData = useSelector((store) => store.todos.infoData)
  const isLoading = useSelector((store) => store.todos.isLoading)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const [nameAdd, setNameAdd] = useState("")
  const [emailAdd, setEmailAdd] = useState("")

  const [nameEdit, setNameEdit] = useState("")
  const [emailEdit, setEmailEdit] = useState("")
  const [idx, setIdx] = useState(null)4

  function editShow(user) {
    handleOpenE()
    setNameEdit(user.name)
    setEmailEdit(user.email)
    setIdx(user)
  }

  const [openE, setOpenE] = useState(false)
  const handleCloseE = () => setOpenE(false);
  const handleOpenE = () => setOpenE(true);

  return (
    <>
      {
        isLoading ? (
          <h1>Loading....</h1>
        ) : (
          <div className=' p-[50px]'>
            <button onClick={handleOpen} className='bg-[black] px-[10px] rounded-[5px] py-[3px] text-white'>Add</button>
            {infoData.map((e) => {
              return (
                <>
                  <div key={e.id} className='flex p-[20px] items-start gap-[30px]'>
                    <h1>{e.name}</h1>
                    <h1>{e.email}</h1>
                    <button onClick={() => dispatch(deleteUser(e.id))} className='bg-[red] px-[10px] rounded-[5px] py-[3px] text-white'>delete</button>
                    <button type="checkbox" checked onClick={() => dispatch(compUser(e))} style={{ background: e.comp ? "#2a84b9" : "#414343" }} className='bg-[#414343] px-[10px] rounded-[5px] py-[3px] text-white'>checked</button>
                    <button onClick={() => editShow(e)} className='bg-[green] px-[10px] rounded-[5px] py-[3px] text-white'>Edit</button>
                  </div>
                </>
              )
            })}
          </div>
        )
      }

      {/* add */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col items-start gap-[20px]">
          <Typography sx={{ fontSize: "36px" }}>Add User</Typography>
          <TextField label="Name" value={nameAdd} onChange={(e) => setNameAdd(e.target.value)} />
          <TextField label="Email" value={emailAdd} onChange={(e) => setEmailAdd(e.target.value)} />
          <Button onClick={() => {
            dispatch(addUser({ name: nameAdd, email: emailAdd, comp: true }, setEmailAdd(""), setNameAdd("")));
            handleClose()
          }}>
            Save
          </Button>
        </Box>
      </Modal>


      {/* edit */}
      <Modal
        open={openE}
        onClose={handleCloseE}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col items-start gap-[20px]">
          <Typography sx={{ fontSize: "36px" }}>Edit User</Typography>
          <TextField label="Name" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
          <TextField label="Email" value={emailEdit} onChange={(e) => setEmailEdit(e.target.value)} />
          <Button variant="outlined" onClick={() => dispatch(editUser({ id: idx.id, name: nameEdit, email: emailEdit, comp: idx.comp }), handleCloseE())}>Save</Button>
        </Box>
      </Modal>

    </>
  )
}

export default App
