import React from 'react';
import './Avatar.scss';

class Avatar extends React.Component<{
    size: number
}> {
  render() {
    const style={
        height: this.props.size,
        width: this.props.size,
    }

      return (
        <div className="avatar-container">
            <img style={style} className="avatar" src="https://media.licdn.com/dms/image/C5603AQGyWvpe2KeYJg/profile-displayphoto-shrink_200_200/0?e=1577318400&v=beta&t=zEUf_NhJmTWYxVsPpV0im6IfnTIkjBBRDo2bCDJZM0g" alt="Mathieu's avatar"/>
        </div>
      );
  } 
}

export default Avatar;
