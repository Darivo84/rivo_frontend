const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex mt-3'>
 			{/* Gender */}
			<div className='form-control'>
 				<label className={`label gap-2 cursor-pointer ${ selectedGender === 'Male' ? 'selected' : '' }`}>
 					<span className='label-text text-white'>Male</span>
 					<input 
						type='checkbox'
						className='checkbox border-slate-900' 
						checked={ selectedGender === 'Male' }
						onChange={ () => onCheckboxChange('Male') }
					/>
 				</label>
 			</div>
 			<div className='form-control'>
 				<label className={`label gap-2 cursor-pointer ${ selectedGender === 'Female' ? 'selected' : '' }`}>
 					<span className='label-text text-white'>Female</span>
 					<input 
						type='checkbox' 
						className='checkbox border-slate-900' 
						checked={ selectedGender === 'Female' }
						onChange={ () => onCheckboxChange('Female') }
					/>
 				</label>
 			</div>
 		</div>
  )
}

export default GenderCheckbox