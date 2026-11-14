import React from 'react'

const Map = () => {
    return (
        <>
            <section className='map'>
                <div className="container">
                    <h2 className='primary-heading map__heading'>Our Location</h2>
                    <div className="map__content">
                        <div className='map__skyturf'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29077.046146807657!2d91.3966420109108!3d24.359351328602774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJalalabad%2C%20Sultan%20Nagar%2C%20Richi%20-%203300%2C%20Habiganj%20Sadar%2C%20Habiganj!5e0!3m2!1sen!2sbd!4v1791016019147!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='map__map'
                            ></iframe>
                            <h3 className='our-turfs__turf-name'>Musapur Turf Arena</h3>
                            <p className='our-turfs__turf-text'>The Home of Football in Musapur</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Map