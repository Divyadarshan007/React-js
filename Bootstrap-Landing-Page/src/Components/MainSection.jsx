
import ImageContent from './ImageContent'
import ImagePart from './ImagePart'

const MainSection = () => {
  return (
    <>
      <section className='hero-section'>
            <div className="container">
                <div className='row vh-100 align-items-center'>
                      <div className="col-6">
                        <ImageContent />
                      </div>
                      <div className="col-6">
                        <ImagePart />
                      </div>
                </div>
            </div>
        </section>
        
        
    </>
  )
}

export default MainSection