window.addEventListener('scroll', () => {
    if (scrollY >= 1)
        document.querySelector('.jumbotron').style.padding = "0rem 2rem"
    else if (scrollY <= 1)
        document.querySelector('.jumbotron').style.padding = "4rem 2rem"
})

// Add note Button refrence
const addNote = document.querySelector('.__addNoteBtn');
const cardMainBody = document.querySelector('.__cardMainBodyPacker')

addNote.addEventListener('click', () => {
    const product = document.createElement('div');
    product.classList.add('__cardMainContainer')

    const htmlData = `
                    <div class="__cardPacker">
                        <div class="__cardHeader">
                            <div class="__cardHeaderIcons">
                                <i class="fa fa-trash-o"></i>
                                <i class="fa fa-pencil-square-o"></i>
                                <i class="fa fa-window-minimize"></i>
                            </div>
                        </div>
                        <div class="__cardBody">
                            <div class="__cardBodyCloser">
                                <form action="">
                                    <div class="__row">
                                        <!-- Part_A title and description of product -->
                                        <div class="__inputTextPacker">
                                            <input type="text" name="title" id="" class="__inputText form-control" placeholder="Title">
                                        </div>
                                        <div class="__inputTextPacker">
                                            <input type="text" name="discription" id="" class="__inputText form-control" placeholder="Description">
                                        </div>
                                    </div>
                                    <div class="__row">
                                        <!-- Part_B product details -->
                                        <div class="__row">
                                            <div class="__productDetailsPacker">
                                                <select name="" id="" class="__productFormSelect form-control">
                                                    <option class="form-control" value="None">GST Slab</option>
                                                    <option class="form-control" value="0">0%</option>
                                                    <option class="form-control" value="5">5%</option>
                                                    <option class="form-control" value="12">12%</option>
                                                    <option class="form-control" value="18">18%</option>
                                                    <option class="form-control" value="28">28%</option>
                                                </select>
                                            </div>
                                            <div class="__productDetailsPacker">
                                                <input type="text" name="HSNCode" id="" placeholder="HSN Code" class="form-control">
                                            </div>
                                            <div class="__productDetailsPacker">
                                                <input type="Number" name="ProductNetAmount" id=""
                                                    placeholder="Pices in Case / Bag" class="form-control">
                                            </div>
                                            <div class="__productDetailsPacker">
                                                <input type="Number" name="Stock" id="" placeholder="Stock" class="form-control">
                                            </div>
                                        </div>

                                        <div class="__row">
                                            <div class="__productDetailsPacker">
                                                <input type="Date" name="MFG_Date" id="" placeholder="MFG Date" class="form-control">
                                            </div>
                                            <div class="__productDetailsPacker">
                                                <select name="" id="" class="form-control">
                                                    <option value="none" class="form-control">Product Life</option>
                                                    <option class="form-control" value="3">3 Month</option>
                                                    <option class="form-control" value="6">6 Month</option>
                                                    <option class="form-control" value="9">9 Month</option>
                                                    <option class="form-control" value="12">12 Month</option>
                                                    <option class="form-control" value="24">24 Month</option>
                                                    <option class="form-control" value="36">36 Month</option>
                                                    <option class="form-control" value="48">48 Month</option>
                                                </select>
                                            </div>
                                            <div class="__productDetailsPacker">
                                                <label for="EXP_Date" class="mb-0">
                                                    <em>EXP Date&nbsp;</em>
                                                </label>
                                                <span class="__productExpDate">
                                                    <strong>
                                                        <em>00/00/0000</em>
                                                    </strong>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="__row">
                                            <div class="__productDetailsPacker">
                                                <input type="number" name="costPrice" id="" placeholder="Cost Price" class="form-control">
                                            </div>
                                            <div class="__productDetailsPacker">
                                                <input type="number" name="sellPrice" id="" placeholder="Sell Price" class="form-control">
                                            </div>
                                            <div class="__productDetailsPacker">
                                                <input type="number" name="VAT" id="" placeholder="VAT" class="form-control">
                                            </div>
                                            <div class="__productDetailsPacker">
                                                <input type="number" name="Profit" id="" placeholder="Net Amount" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>`
    
    product.insertAdjacentHTML('afterbegin', htmlData)
    cardMainBody.appendChild(product);

    // card refrence
    const _title = document.querySelector('.___productTitle');
    const _description = document.querySelector('.___productdescription');
    const _gstSlab = document.querySelector('.___productGstSlab');
    const _hsnCode = document.querySelector('.___productHsnCode');
    const _netQuantity = document.querySelector('.___productNetQuantity');
    const _stock = document.querySelector('.___productStock');
    const _mfgDate = document.querySelector('.___productMfgDate');
    const _LifeTime = document.querySelector('.___productLifeLine');
    const _ExpiryDate = document.querySelector('.___productExpiryDate');
    const _CostPrice = document.querySelector('.___productCostPrice');
    const _SellPrice = document.querySelector('.___productSellPrice');
    const _vatPersent = document.querySelector('.___productVatPersent');
    const _netAmount = document.querySelector('.___productNetAmount');
})
