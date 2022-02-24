import * as React from "react";
import styled from "styled-components";

const AvatarFallback = () => <div>{"Failed to load image"}</div>;

const Avatar = ({ src, className }) => {
  const [fallback, setFallback] = React.useState(false);

  const onFallback = React.useCallback((e) => setFallback(true), []);

  return (
    <div className={className}>
      {fallback ? <AvatarFallback /> : <img src={src} onError={onFallback} />}
    </div>
  );
};

export default styled(Avatar)`
  margin: 10px;

  & img {
    border-radius: 50%;
  }
`;
