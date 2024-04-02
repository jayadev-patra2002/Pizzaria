import React from "react";
export default function Success({success})
{
    return(
        <>
          <div class="alert alert-success" role="alert">
              {success}
          </div>
        </>
    )
}