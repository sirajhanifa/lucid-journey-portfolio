import { FileDown } from "lucide-react";
import { Button } from "./ui/button";

const ResumeDownload = () => {
    return (
        <div className="flex justify-center mt-8">
            <a
                href="/resume.pdf"
                download="Mohamed_Hanifa_Resume.pdf"
                className="w-full sm:w-auto"
            >
                <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white border-none"
                >

                    <FileDown className="h-5 w-5" />
                    Download Resume
                </Button>
            </a>
        </div>
    );
};

export default ResumeDownload;
