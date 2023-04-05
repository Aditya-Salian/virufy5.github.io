import TitleText from "~/components/molecules/TitleText/TitleText"
import Button from "~/components/atoms/button/Button"

export default function Section7({
    TitleLabel,
    Label1,
    Label2,
}) {
    return (
        <div className="flex"
            style={{
                width: "70%",
                flexDirection: "column",
                margin: "0 auto",
                textAlign: "center"
            }}>
            <div className="mt-[90px]">
                <TitleText
                    TitleSize="h1"
                    TitleLabel={TitleLabel}
                />
                <div className="flex"
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1",
                        marginTop: "30px"
                    }}>
                    <div
                        style={{
                            width: "30%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1",
                            marginTop: "30px"
                        }}>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-20 mb-28">
                            <Button size="large" type="primary" path="#" label={Label1} />
                            <Button size="large" type="secondary" path="#" label={Label2} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}