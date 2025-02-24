import { useState, useEffect,  } from 'react';
import { getPhones, deletePhone, createPhone, updatePhone } from '../api';
import { useNavigate } from 'react-router-dom';

export const AddPhone = () => {
    const [formData, setFormData] = useState({ name: '', brand: '', price: '', image: null });
    const [phones, setPhones] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const nav = useNavigate()

    useEffect(() => {
        fetchPhones();
    }, []);

    const fetchPhones = async () => {
        const res = await getPhones();
        setPhones(res.data);
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('adminToken')
        if(!token){
            nav('/login')
            return;
        }
        await deletePhone(id, token);
        fetchPhones();
    }

    const handleEdit = (phone) => {
        setFormData({ name: phone.name, brand: phone.brand, price: phone.price, image: null });
        setEditingId(phone._id);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('brand', formData.brand);
        data.append('price', formData.price);
        if (formData.image) data.append('image', formData.image);

        await createPhone(data);

        fetchPhones()
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Brand:</label>
                    <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <button type="submit">{editingId ? 'Update Phone' : 'Add Phone'}</button>
            </form>
{/* 
            {phones.map((phone) => (
                <div key={phone._id}>
                    <p>Name: {phone.name}</p>
                    <p>Brand: {phone.brand}</p>
                    <p>Price: {phone.price}</p>
                    <img style={{ width: '200px' }} src={`http://localhost:3001/uploads/${phone.imageUrl}`} alt={phone.name} />
                    <br />
                    <button onClick={() => handleEdit(phone)}>Edit</button>
                    <button onClick={() => handleDelete(phone._id)}>Delete</button>

                    <hr />
                </div>
            ))} */}
        </div>
    );
};


