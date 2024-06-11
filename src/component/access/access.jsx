import React from 'react'
import './access.css'

const Access = () => {
  return (
    <>
     <section class="box_section py-5 d-none position-relative d-lg-block">
        <div class="container">
            <div class="row"> 
                <div class="box-main col-12">
                    <div class="box_sec_sub col-lg-5">
                        <div class="box_bix"></div>
                        <div class="min_box"></div>
                    </div>
                    <div class="box_sec_sub col-lg-5">
                        <div class="box_bix"></div>
                        <div class="min_box"></div>
                    </div>
                </div>
                <div class="middale_min-box col-3 position-absolute"><h2>Access (Free)</h2></div>
            </div>
        </div>
    </section>
    <section class="box_section py-100 py-50 d-block d-lg-none">
        <div class="container">
            <div class="row">
                <div class="box-main col-12">
                    <div class="col-12 col-lg-5">
                        <div class="box_bix"></div>
                        <div class="min_box"></div>
                    </div>
                    <div class="middale_min-boxx"><h2>Access (Free)</h2></div>
                    <div class="col-12 col-lg-5">
                        <div class="box_bix"></div>
                        <div class="min_box"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Access
