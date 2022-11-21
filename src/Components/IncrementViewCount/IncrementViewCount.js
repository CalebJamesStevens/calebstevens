import React from 'react';

export default function IncrementViewCount({ slug }) {
  React.useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);
}
