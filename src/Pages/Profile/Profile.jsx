import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AuthContext } from '@/Contexts/AuthProvider';
import useTitle from '@/hooks/useTitle';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { RiseLoader } from 'react-spinners';
// import toast from 'react-hot-toast';



const Profile = () => {

    const { user, updateUserInfo,emailVerification } = useContext(AuthContext)
      

    useTitle('Profile')
   
    const navigate = useNavigate()

    const [dbUser, setDBuser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [profileImage, setProfileImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const { register, handleSubmit, control } = useForm();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);
        setPreviewUrl(URL.createObjectURL(file));
        
    };



    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/usersCollection/${user?.email}`,{withCredentials:true})
                setDBuser(response.data)
                setLoading(false);      // Start loading
                setError(null);
            }

            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        if (user?.email) {
            fetchUsers()
        }
    }, [user?.email])

    
    const handleInfoChange = (userInfoData) => {
        
        const uploadedImg = userInfoData.profileImage[0]
        const formData = new FormData()
        formData.append("image", uploadedImg)


        const url = 'https://api.imgbb.com/1/upload?key=16612783c60b3795ca45e1987bb6938c'
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.data) {
                    const updatedInfo = {
                        name: userInfoData.name,
                        phoneNumber: userInfoData.phoneNumber,
                        gender: userInfoData.gender,
                        photoUrl: imgData.data.display_url
                    }

                 
                    handleUpdate(userInfoData.name, imgData.data.display_url, userInfoData.phoneNumber)
                    
                    fetch(`${import.meta.env.VITE_API_BASE_URL}/usersCollection/${dbUser?._id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(updatedInfo)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.modifiedCount > 0){
                            navigate("/")
                            toast.success("Profile updated!")
                        }
                    })
                }

            })
    }

    const handleUpdate = (name, profileImage, phoneNumber) => {
        const profile = {
            displayName: name,
            phoneNumber: phoneNumber,
            photoURL: profileImage
        }
        updateUserInfo(profile)
            .then(() => {

            })
            .catch((error) => {
                console.error(error)
            })
    }

    const verifyEmail = () =>{
        emailVerification()
        .then(() =>{
            
            toast.success("Verification link has been sent to your email address. ")
        })
    }

    if (loading) return <div className=' mt-60 flex justify-center items-center'>
        {/* <h1>loading....</h1> */}
        <RiseLoader />
    </div>;

    if (error) return <div className='mt-20'>Error: {error}</div>;
    return (
        <div className='mt-40'>

            <Card className="max-w-4xl mx-auto mt-8 p-6 space-y-6 shadow rounded-xl">
                <h1>Edit Profile</h1>
                <form onSubmit={handleSubmit(handleInfoChange)}>
                    <div>
                        {/* Profile Image Upload */}
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
                                )}
                            </div>
                            <div>
                                <Input {...register("profileImage")} type="file" accept="image/*" onChange={handleImageChange} required />
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <Label className="mb-2">Full Name</Label>
                                <Input {...register("name")} className="border-0" placeholder="Enter your name" defaultValue={dbUser?.fullName} />
                            </div>

                            {/* Email (readonly) */}
                            <div>
                                {
                                    !user?.emailVerified && <Label className="mb-2">Email Address <span className="text-blue-600  text-sm ml-2"> <Label onClick={verifyEmail} className="cursor-pointer">Verify Email</Label></span></Label>
                                }
                                <Input className="border-0 " placeholder="email" defaultValue={dbUser?.email} readOnly />
                            </div>

                            {/* Mobile */}
                            <div>
                                <Label className="mb-2">Mobile </Label>

                                <Input {...register("phoneNumber")} className="border-0 " placeholder="Please enter your mobile" defaultValue={dbUser?.mobileNumber} />
                            </div>

                            {/* Gender */}
                            <div>
                                <Label className="mb-2">Gender</Label>
                                <Controller
                                    name="gender"
                                    control={control}
                                    defaultValue={dbUser?.gender}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="pt-4">
                            <Button className="bg-cyan-700 hover:bg-orange-600 cursor-pointer">SAVE CHANGES</Button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Profile;