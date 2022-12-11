import TableDesign from "../../UI/tablesUI/TableDesign";
import HeaderDesign from "../../UI/tablesUI/HeaderDesign";
import HeaderTh from "../../UI/tablesUI/HeaderTh";
import BodyDesign from "../../UI/tablesUI/BodyDesign";
import ViewInventory from "./ViewInventory";

const ViewInventoryList = (props) => {
    <div className="justify-center items-center">
            <TableDesign>
                <HeaderDesign>
                    <HeaderTh>
                        BloodBag ID
                    </HeaderTh>
                    <HeaderTh>
                        Blood Type
                    </HeaderTh>
                    <HeaderTh>
                    HBV
                    </HeaderTh>
                    <HeaderTh>
                    HCV
                    </HeaderTh>
                    <HeaderTh>
                    HIV
                    </HeaderTh>
                    <HeaderTh>
                    HTLV
                    </HeaderTh>
                    <HeaderTh>
                        syphilis
                    </HeaderTh>
                    <HeaderTh>
                    WNV
                    </HeaderTh>
                    <HeaderTh>
                    TrypanosomaCruzi
                    </HeaderTh>
                    <HeaderTh>
                    CMV
                    </HeaderTh>
                    <HeaderTh>
                    Babesia
                    </HeaderTh>
                    <HeaderTh>
                    BacterialContamination
                    </HeaderTh>
                    <HeaderTh>
                    Status
                    </HeaderTh>
                </HeaderDesign>
                <BodyDesign>
                    {
                        props.BloodBags.map((b) =>(
                            <ViewInventory BloodBag={b} key={b._id}/>
                        ))
                    }
                </BodyDesign>
            </TableDesign>
        </div>
};
export default ViewInventoryList;