'use client';

import useLoginModal from "@/app/hooks/useLoginModal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  userId
}) => {
  const loginModal = useLoginModal();
  const addPropertyModal = useAddPropertyModal();

  const staynestYourHome = () => {
    if(userId){
      addPropertyModal.open();
    }
    else{
      loginModal.open();
    }
  }

  return (
    <div 
      onClick={staynestYourHome}
      className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
    >
        StayNest your stay
    </div>

  )
}

export default AddPropertyButton